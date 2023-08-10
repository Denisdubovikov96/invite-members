# Task 1
placed in src/utils/getValueByPath.ts

Write a get function that gets an object and the path to a nested property of an object and returns the value of that property (or undefined if the property doesn't exist).
The third, optional argument to the function is the default value that is returned if the value in the specified path does not exist.

const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'
get(obj, 'x.x.e'); // undefined
get(obj, 'a.x.e', true); // true
get(obj, 'a.x.e', 'My default value'); // My default value

# Task 2

React Users & Invites 

This task is to create a React Class or Functional component where we need to render users and invites that we send to users.

We need to show all users and invites together, split into to 2 sections like in this Figma design:

https://www.figma.com/file/r6Y0zKifCDFtLdUh7Lemqi/Untitled?node-id=0%3A1

Please use 375px width for the screen (do not worry about other resolutions)

Imagine that you have an API:

1) Users.getUsers(): Promise<TeamMember[]>

interface TeamMember {
    id: number;
    status: Status;
    user: UserShortData;
    role: Role;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

2) Users.getInvites(): Promise<Invite[]>

interface Invite {
    id: number;
    phone: string;
    role: Role;
}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

