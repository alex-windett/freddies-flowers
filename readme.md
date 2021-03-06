- This is currently made of two static HTML pages
- run npm install and bower install to grab all dependencies

## Webpack
- Project uses webpack, so run npm start to run the equivilant to grunt dev

## Style Guide
This App attempts to follow these guidelines https://github.com/airbnb/javascript/tree/master/react

It can be summerized here:

### React Components
- If there a state is being declared then use `class ... extends React.Component {}`.
- A mixin is a reason not to use this though. Only when neccesarry use `const ... = React.createComopnent({})`

### Naming
- Always use the `.jsx` extension and PascalCase for React components
- The parent directory should be named the same as the main component in that File e.g. `./Footer/Footer.jsx`

### Aligment
- Indent element attributes so that they are easily readable.
- Do not pad JSX attributes in curly braces
- Leave a trailing white space before the closing of an element - it makes the closing parenthesis easier to find
    - e.g. ```<Foo
                  superLongParam="bar"
                  anotherSuperLongParam="baz" >
                  <Quux />
                </Foo>
                ```

### Props and State
- They should both be written in camelCase
- Add the component PropTypes after the class is declared
    - This is good as a reference point
    - It also gives indications if things break
    ```
    RegistrationAddressBilling.propTypes = {
        previousStep: React.PropTypes.func.isRequired,
        nextStep: React.PropTypes.func.isRequired,
        saveValues: React.PropTypes.func.isRequired,
        fieldValues: React.PropTypes.object
    }
    ```


### Methods
- Component Methods should be ordered in the following way
    - optional `static` methods
    - `constructor`
    - `getChildContext`
    - `componentWillMount`
    - `componentDidMount`
    - `componentWillReceiveProps`
    - `shouldComponentUpdate`
    - `componentWillUpdate`
    - `componentDidUpdate`
    - `componentWillUnmount`
    - clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
    - getter methods for render like getSelectReason() or getFooterContent()
    - Optional render methods like renderNavigation() or renderProfilePicture()
