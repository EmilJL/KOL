import React from "react";

import Main from '../components/main/main.component.js';
import Profile from '../components/profile/profile.component.js';
import Graphs from '../components/graphs/graphs.component.js';
import Calendar from '../components/calendar/calendar.component.js';
import Inbox from '../components/inbox/inbox.component.js';

export const HomeScreen = () => <Main />;
export const ProfileScreen = () => <Profile />;
export const GraphsScreen = () => <Graphs />;
export const CalendarScreen = () => <Calendar />;
export const InboxScreen = () => <Inbox />;