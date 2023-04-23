import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButto } from './components/submit-butto/submit-butto';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>Name</Label>
                <Input id={'name'} name={'name'} />
                <Label htmlFor={'email'}>Email</Label>
                <Input id={'email'} name={'email'} />
                <Label htmlFor={'email'}>Message</Label>
                <Input id={'message'} name={'message'} />
                <SubmitButto />
            </form>
        </div>
    );
}

export default App;
