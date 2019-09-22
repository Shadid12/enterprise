export type ISignupPayloadModel = {
    email?: string,
    password?: string,
    password2?: string,
    isNurse?: boolean
}

export type ISignInPayloadModel = {
    email?: string,
    password?: string
}