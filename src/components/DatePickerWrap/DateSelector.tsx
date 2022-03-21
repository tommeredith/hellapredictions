import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { formatDate, unformatDate } from '../../helpers/formatDate';
import { setFormattedDate, setWeek } from '../../store/actions/dateAndWeek.actions';
import { State } from '../../store/state.type';

const DateSelector = ({ setFormattedDate, formattedDate }) => {

    useEffect(() => {
        setFormattedDate(formatDate(new Date()))
    }, []) 

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="What date you looking for?"
                value={unformatDate(formattedDate)}
                onChange={(newValue) => {
                    setFormattedDate(formatDate(newValue));
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default connect(
    (state: State) => ({
        sport: state.sportOptions.sport,
        formattedDate: state.dateAndWeek.formattedDate
    }),
    (dispatch: any) => ({
        setFormattedDate: (date) => dispatch(setFormattedDate(date))
    })
)(DateSelector)