import { ISurvey } from '@/shared/types/survey.interface';
import SurveyMainCard from '../SurveyMainCard';

export default function SurveyMain({ surveys }: { surveys: ISurvey[] }) {
    return (
        <div className='p-4 grid grid-cols-2 gap-4'>
            {surveys.map((survey) => (
                <SurveyMainCard survey={survey} key={survey._id} />
            ))}
        </div>
    );
}
