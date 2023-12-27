
// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Arlene',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/',
		},
		{
			id: '3',
			name: 'Classroom',
			icon: 'trello',
			link: 'https://classroom.google.com/u/1/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Pintrist',
			icon: 'glasses',
			link: 'https://www.pinterest.com/',
		},
		{
			id: '6',
			name: 'youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Liked songs',
					link: 'https://open.spotify.com/collection/tracks',
				},
				{
					name: 'ate',
					link: 'https://open.spotify.com/playlist/1OX1Fk8HyXdbfuwhiOsimC?si=07afe25b2b0a4530',
				},
				{
					name: 'Daisy',
					link: 'https://open.spotify.com/album/06LUoqFf4VRz193j5GBToN?si=SbrUVPBnQGWZ0EPnJbENbg',
				},
				{
					name: 'get up',
					link: 'https://open.spotify.com/album/4N1fROq2oeyLGAlQ1C1j18?si=5EwfFhxERKesX5_zLhRQGw',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Canvas',
					link: 'https://esuhsd.instructure.com/',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com/browse',
				},
				{
					name: 'Roblox',
					link: 'https://www.roblox.com/home',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/accounts/login/?source=reset_password',
				},
			],
		},
	],

};
