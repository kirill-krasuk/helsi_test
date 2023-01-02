import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

import { UserForm } from './features/user-form';

function App() {
	return (
		<>
			<AppBar position='static' sx={{ p: 1 }}>
				<Typography variant='h5'>Створення персони</Typography>
			</AppBar>
			<Box sx={{ p: 2 }}>
				<UserForm />
			</Box>
		</>
	);
}

export default App;
