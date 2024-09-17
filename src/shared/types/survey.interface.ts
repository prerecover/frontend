import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';

export interface IQuestionAnswer {
    question?: ISurveyQuestion;
    text: string;
}

export interface ISurveyQuestion {
    survey?: ISurvey;
    text: string;
    answers: IQuestionAnswer[];
}

export interface ISurvey extends ICommon {
    appointment?: IAppointment;
    questions: ISurveyQuestion[];
}
