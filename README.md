# Snippets

This is a react app that displays a grid of personalized snippets.

## Installation

To install the app, clone this repository and run the following command in your terminal:

```
npm install
```

To run the app, run the following command:

```
npm dev
```

### Json File

The app reads data from a JSON file located at src/snippets.json. The JSON file should have the following structure:

```
{
    "snippets": [
        {
            "name": "Example 1",
            "content": "Example 1 content",
            "tags": ["tag1", "tag2"]
        },
        {
            "name": "Example 2",
            "content": "Example 2 content",
            "tags": ["tag1", "tag2"]
        },
    ]
}
```

### Filtering

The app allows users to filter the content by typing in the input box located at the top of the page. The app filters the snippets based on user input

### Tag sidebar

The app also displays a sidebar that shows all the tags present in the files, including a button for "All". Users can click on a tag button to filter the files by that tag.

### Dependencies

This app uses the following dependencies:

```
React
Vite
Sass
```
