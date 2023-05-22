import { WithApiAuthRequired,getSession } from "@auth0/nextjs-auth0";

import React from 'react'

export default WithApiAuthRequired(function SecretRoute(res,req){
    const session =getSession(req,res)
    const user =session.user
})