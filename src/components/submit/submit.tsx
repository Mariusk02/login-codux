import styles from './submit.module.scss';
import classNames from 'classnames';

export interface SubmitProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-submits-and-templates
 */
export const Submit = ({ className }: SubmitProps) => {
    return <div className={classNames(styles.root, className)}>Submit</div>;
};
