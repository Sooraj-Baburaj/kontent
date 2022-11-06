import KontentProvider from "../components/KontentProvider";

import { storiesOf } from "@storybook/react";

const story = storiesOf("App", module)

story.add('App test', () => {
    return (
        <KontentProvider />
    )
})