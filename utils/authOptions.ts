import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials:{
                email: {label:"Email", type:"email"},
                password: {label:"Password", type:"password"}
            },
            authorize(credentials,req) {
                //Over here we can implement our authentication logic through database operations or an api endpoint. 
                //For the sake of this project, we'll statically verify the credentials here.

                if(credentials?.email === "admin@next.com" && credentials.password==="admin123") {
                    return {
                        id:"1",
                        email: "admin@next.com"
                    }
                }

                return null;
            }
        }) 
    ]
}
