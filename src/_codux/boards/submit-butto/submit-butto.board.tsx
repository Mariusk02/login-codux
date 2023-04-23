import { createBoard } from '@wixc3/react-board';
import { SubmitButto } from '../../../components/submit-butto/submit-butto';

export default createBoard({
    name: 'SubmitButto',
    Board: () => <SubmitButto>Submit</SubmitButto>,
});
