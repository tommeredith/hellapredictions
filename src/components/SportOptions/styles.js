const activeState = {
    background: '#4d4d4d',
    color: '#fff',
}

export const styles = ({availSport, currentSport}) => ({
    button : {
        cursor: 'pointer',
        padding: '10px 0px',
        marginRight: '10px',
        width: '100px',
        textAlign: 'center',
        minWidth: '60px',
        borderRadius: '10px',
        border: '1px solid #4d4d4d',

        ...(
            availSport === currentSport && activeState
        ),
        
        ':hover': activeState
        
    }
})