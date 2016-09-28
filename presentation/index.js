// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  serverSideRendering: require("../assets/server-side-rendering.png"),
  clientSideRendering: require("../assets/client-side-rendering.png"),
  share: require("../assets/share.png")
};

preloader(images);

const theme = createTheme({
  primary: "#009682",
  secondary: "#424242",
  tertiary: "#FDFDFD",
  quartenary: "white"
});

theme.screen.components.codePane.pre.fontSize = "1.5rem";
theme.screen.components.image.margin = "1.5rem auto";
theme.screen.components.listItem.fontSize = "3.5rem";
theme.screen.components.listItem.fontWeight = "500";

const AppearListItem = ({children}) => <Appear><ListItem>{children}</ListItem></Appear>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Universal JavaScript
            </Heading>
            <Link href="https://github.com/oyvinmar/ssr-presentation">
              <Text textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={1}>
              Universal JavaScript
            </Heading>
            <List textColor="tertiary">
              <ListItem>What is it?</ListItem>
              <ListItem>Why use it?</ListItem>
              <ListItem>How to implement it (with React)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Background
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary" textFont="primary" lineHeight={2}>
              Rendering
            </Heading>
            <Text textColor="tertiary">Code that generates HTML for the browser</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={1}>
              Render where?
            </Heading>
            <List textColor="tertiary">
              <ListItem>Server-side</ListItem>
              <ListItem>Client-side</ListItem>
              <ListItem>Both</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Server-side rendering
            </Heading>
            <Image width="100%" src={images.serverSideRendering}/>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Client-side rendering
            </Heading>
            <Image width="100%" src={images.clientSideRendering}/>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Universal rendering
            </Heading>
            <Image width="100%" src={images.clientSideRendering}/>
          </Slide>
          <Slide>
            <Heading size={1} textColor="secondary" lineHeight="1.5">
              Demo
            </Heading>
            <Link href="http://api.test.ndla.no:8082/article/300">
              <Text textColor="tertiary">ndla-frontend</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Why?
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Performance benefits
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>No flash of blank content</AppearListItem>
              <AppearListItem>Fast and light rendering (mobile friendly)</AppearListItem>
              <AppearListItem>Easy caching</AppearListItem>
              <AppearListItem>All the benefits of SPA</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              SEO
            </Heading>
            <Appear>
              <Heading size={4} textColor="tertiary">
                Pleasing robots and crawlers
              </Heading>
            </Appear>
            <Appear>
              <Image width="50%" src={images.share}/>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Don't do it for fun
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Harder to reason about code and more complexity</AppearListItem>
              <AppearListItem>More testing needed</AppearListItem>
              <AppearListItem>May not always be the best user experience</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              How?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Why now?
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Before rendring was always done in different programming environments, usually in different languages</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} textColor="primary" lineHeight={2}>
              Node.js
            </Heading>
            <Appear>
              <Text textColor="tertiary">Run JavaScript everywhere!</Text>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Same code running in different environments</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Reuse up to 99% (ish) of your code</Text>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="secondary">
              Universal JavaScript
            </Heading>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Main challenges
            </Heading>
            <List textColor="tertiary">
              <AppearListItem>Rendering</AppearListItem>
              <AppearListItem>Routing</AppearListItem>
              <AppearListItem>Data fetching</AppearListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Rendering
            </Heading>
            <Text textColor="tertiary">Easy (if you use React)</Text>
          </Slide>
          <Slide>
            <Heading size={4} textColor="secondary" lineHeight="2">
              ReactDOMServer.renderToString
            </Heading>
            <CodePane lang="js" source={`string renderToString(ReactElement element)`} margin="20px auto" />
            <Appear>
              <Text textColor="tertiary">Render a React Element to its initial HTML.</Text>
            </Appear>
          </Slide>
          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/renderToString.example")}
            ranges={[
              { loc: [0, 200], title: "Render to string" },
              { loc: [1, 2], note: "Import renderToString" },
              { loc: [3, 12], note: "Simple component" },
              { loc: [12, 15], note: "Provide props and render to string" },
              { loc: [16, 17], note: "String output" }
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              Routing
            </Heading>
            <List textColor="secondary">
              <AppearListItem>Match url to component</AppearListItem>
              <AppearListItem>Rendered component and wrap it in html</AppearListItem>
              <AppearListItem>Send html to client</AppearListItem>
            </List>
          </Slide>
          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/routing.example")}
            ranges={[
              { loc: [0, 200], title: "Routing flow" },
              { loc: [1, 2], note: "Import react-router dependencies" },
              { loc: [2, 3], note: "Import our shared routes" },
              { loc: [4, 5], note: "Accept any request" },
              { loc: [5, 6], note: "Match route to component and provide callback" },
              { loc: [6, 8], note: "Something went badly wrong, so 500 with a message" },
              { loc: [8, 10], note: "We matched a ReactRouter redirect, so redirect from the server" },
              { loc: [10, 12], note: "If we got props, that means we found a valid component to render for the given route" },
              { loc: [11, 13], note: "Render `index` (template), but pass in the markup we want it to display" },
              { loc: [13, 16], note: "No route match, so 404." }
            ]}
          />

          <Slide>
            <Heading size={2} textColor="secondary">
              Data fetching
            </Heading>
            <Appear>
              <Text textColor="tertiary">Need to work on both client and server.</Text>
            </Appear>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Data fetching on client is async.</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Only fetch data we need to render one page.</Text>
          </Slide>
          <Slide bgColor="secondary">
            <Text textColor="tertiary">Can't call render to string before all calls are finished</Text>
          </Slide>
          <Slide>
            <Heading size={2} textColor="secondary">
              Multiple solutions
            </Heading>
            <List textColor="secondary">
              <AppearListItem>Static methods in components</AppearListItem>
              <AppearListItem>Add redux middleware</AppearListItem>
              <AppearListItem>Use redux-saga</AppearListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} fit textColor="secondary">
              Redux makes it a lot simpler
            </Heading>
            <List textColor="secondary">
              <AppearListItem>Pass state with props way down the react component tree</AppearListItem>
              <AppearListItem>Convenient API for dumping and restoring store state</AppearListItem>
              <AppearListItem>Recreate store on every request</AppearListItem>
            </List>
          </Slide>
          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/staticDataFetching.example")}
            ranges={[
              { loc: [0, 200], title: "Static data fetching" },
              { loc: [1, 4], note: "Add static data fetching method returning a promise" },
              { loc: [5, 8], note: "componentDidMounth is not called on renderToString" },
              { loc: [10, 16], note: "Use redux to inject state as props" },
              { loc: [21, 22], note: "Initiate data fetching and wait for all promises to resolve" },
              { loc: [22, 25], note: "Create initial state and configure store" },
              { loc: [25, 30], note: "renderToString with provided store" },
              { loc: [30, 31], note: "Send HTML to client" }
            ]}
          />
          <Slide transition={["spin", "slide"]}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              That's all folks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
