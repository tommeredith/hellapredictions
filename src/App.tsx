import './App.css';
import React from 'react';
import SportOptions from './components/SportOptions';
import PredictionTable from './components/PredictionTable';
import store from './store';
import { Provider } from 'react-redux';
import ActionButton from './components/ActionButton';
import DatePickerWrap from './components/DatePickerWrap';
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

const renderer = createRenderer()

const App = () => {

	return (
		<RendererProvider renderer={renderer}>
			<Provider store={store}>
				
				<main>
					<h1>Hella Predictions, homie!</h1>
					
					<SportOptions />

					<DatePickerWrap />

					<ActionButton />

					<PredictionTable />
									
				</main>
			</Provider>
		</RendererProvider>
	);
}

export default App
