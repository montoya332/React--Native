import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {
	Location,
	jobItems,
	educationItems,
	projectItems,
	languageIconItems,
	skillsIconItems
} from '../assets/stubData/resume';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
static navigationOptions = {
header: null,
};

render() {
return (
<View style={styles.container}>
<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
<View>
<HeroTitle />
<Timeline
title="Background"
headerIcon="fa-clock-o"
items={jobItems}
pageLine
/>
<Timeline
title="Education"
headerIcon="fa-rocket"
items={educationItems}
/>
<Timeline
title="Projects"
headerIcon="fa-rocket"
items={projectItems}
/>
</View>
</ScrollView>
</View>
);
}

_maybeRenderDevelopmentModeWarning() {
if (__DEV__) {
const learnMoreButton = (
<Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
Learn more
</Text>
);

return (
<Text style={styles.developmentModeText}>
Development mode is enabled, your app will be slower but you can use useful development
tools. {learnMoreButton}
</Text>
);
} else {
return (
<Text style={styles.developmentModeText}>
You are not in development mode, your app will run at full speed.
</Text>
);
}
}

_handleLearnMorePress = () => {
WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
};

_handleHelpPress = () => {
WebBrowser.openBrowserAsync(
'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
);
};
}

const HeroTitle = props => (
<View>
<Text>{props.title}</Text>
<Text>{props.subtitle}</Text>
</View>
);

const Timeline = props => (
<View>
<SectionHeader
title={props.title}
/>
{ props.items.map((item, key) => <TimelineItem key={key} item={item} pageLine={props.pageLine} />) }
</View>
);

const TimelineItem = (props) => {
const { item, pageLine } = props;
return (
<View>
<TimelineItemHeader {...props} />
<Text>{`${item.startDate} - ${item.endDate}`}</Text>
<Text>{item.location}</Text>
<Text>{props.details}</Text>
</View>
);
};

const TimelineItemHeader = props => (
<View>
{props.item.role && (
<View>
<Text> {props.item.role} </Text>
<Text> at </Text>
</View>
)}
<Text> {props.item.title} </Text>
</View>
);

const SectionHeader = props => (
<View>
<Text>{props.title}</Text>
</View>
);

const TimelineHeader = props => (
<Text>TimelineHeader</Text>
);

const TimelineMilestoneIcon = (props) => {
return (<Text>TimelineMilestoneIcon</Text>)
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
contentContainer: {
paddingTop: 30,
},
/* development */
developmentModeText: {
marginBottom: 20,
color: 'rgba(0,0,0,0.4)',
fontSize: 14,
lineHeight: 19,
textAlign: 'center',
},
helpContainer: {
marginTop: 15,
alignItems: 'center',
},
helpLink: {
paddingVertical: 15,
},
helpLinkText: {
fontSize: 14,
color: '#2e78b7',
},
});
