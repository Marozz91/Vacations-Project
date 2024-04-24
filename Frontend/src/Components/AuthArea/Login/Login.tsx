import { Avatar, Paper, Link, Box, Button, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import CredentialsModel from "../../../Models/CredentialsModel";
import notifyService from "../../../Services/NotifyService";
import AirlinesIcon from '@mui/icons-material/Airlines';
import RoleModel from "../../../Models/RoleModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import { useEffect } from "react";
import "./Login.css";


const defaultTheme = createTheme();

function Login(): JSX.Element {


    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();


    const user = useSelector((state: RootState) => state.auth.user);

    const save = async (credentials: CredentialsModel) => {

        try {
            await authService.login(credentials);

            notifyService.success("Welcome!");

        } catch (error: any) {
            notifyService.error(error);
        }
    }



    useEffect(() => {

        if (user?.roleId === RoleModel.User) {
            navigate("/vacations");
        } else if (user?.roleId === RoleModel.Admin) {
            navigate("/vacations-admin");
        }
    }, [user]);


    return (
        <ThemeProvider theme={defaultTheme} >
            <Grid container component="main" sx={{ height: '100%', width: '95%', margin: 'auto' }} className="loginContainer">
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers/travel)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '1rem 0rem 0rem 1rem',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className='Login'>
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
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(save)} sx={{ mt: 1 }}>
                            <TextField {...register("email")}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            <Grid container>

                                <Grid item>
                                    <Link href="register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;