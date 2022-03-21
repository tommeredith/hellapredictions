import React from 'react'
import { useFela } from 'react-fela'
import * as styles from './styles'

const Loading = () => {
    const { css } = useFela()
    return (
        <div className={css(styles.loadingIcon)}>
            <img alt="loading" src="loading.gif" />
        </div>
    )
}

export default Loading