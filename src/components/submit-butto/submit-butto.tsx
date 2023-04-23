import styles from './submit-butto.module.scss';
import classNames from 'classnames';

export interface SubmitButtoProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-submit-buttos-and-templates
 */
export const SubmitButto = ({ className, children }: SubmitButtoProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <button>Submit</button>
        </div>
    );
};
