import { ISignInPayloadModel, ISignupPayloadModel } from "./ISignupPayloadModel";
import IOnboardingPayload from "./IOnboardingPayload";

export default interface IIntialStateForm {
    state: ISignInPayloadModel | IOnboardingPayload | ISignupPayloadModel,
    map(a: number | string): any
}

