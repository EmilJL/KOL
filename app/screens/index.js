import React from "react";

import Profile from '../components/profile/profile.component.js';
import Graphs from '../components/graphs/graphs.component.js';
import Calendar from '../components/calendar/calendar.component.js';
import Inbox from '../components/inbox/inbox.component.js';
import Login from '../components/welcome/login.component.js';
import ForgotInfo from '../components/welcome/forgotInfo.component.js';
import NewUser from '../components/welcome/newUser.component.js';
import Home from '../components/home/home.component.js';

export const HomeScreen = () => <Home />;
export const ProfileScreen = () => <Profile />;
export const GraphsScreen = () => <Graphs />;
export const CalendarScreen = () => <Calendar />;
export const InboxScreen = () => <Inbox />;
export const LoginScreen = () => <Login />;
export const ForgotInfoScreen = () => <ForgotInfo />;
export const NewUserScreen = () => <NewUser />;