import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './buttonStyle'

type enumVariant = 'primary' | 'secondary' | 'link'
interface buttonProps {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    handleClick?: () => void,
}

export default function Button({ variant, label, disabled, startIcon, handleClick }: buttonProps) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            {
                (variant === 'link') ?
                    <Styles.LinkButton disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}
                    </Styles.LinkButton>
                :
                    <Styles.Button variant={variant} disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}
                    </Styles.Button>
            }
        </ThemeProvider>
    );
}