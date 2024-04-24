import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from "@mui/material";
import AirlinesIcon from '@mui/icons-material/Airlines';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Register.css";



function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    const save = async (user: UserModel) => {

        try {

            await authService.register(user);
            notifyService.success("Welcome!");
            navigate("/vacations");

        } catch (error: any) {
            notifyService.error(error);
        }

    }

    return (

        <Grid container component="main" className="Register">
            <CssBaseline />

            <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square borderRadius={'1rem'} >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#1d3557' }}>
                        <AirlinesIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(save)} sx={{ mt: 1 }}>


                        <TextField {...register("firstName")}
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="firstName"
                            autoFocus
                        />

                        <TextField {...register("lastName")}
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lastName"

                        />

                        <TextField {...register("email")}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />

                        <TextField {...register("password")}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Grid>
        </Grid>


    );
}

export default Register;
