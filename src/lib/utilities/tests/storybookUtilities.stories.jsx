const loremIpsum = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

export const socialLinks = [
    {id: 'twitter', label: 'Twitter', path: 'twitter.com'},
    {id: 'facebook', label: 'Facebook', path: 'facebook.com'},
    {id: 'Instagram', label: 'Instagram', path: 'ig.com'}
];

export const videos = [
    { title: 'iConnectz', url: 'https://assets.corneliuses.com/videos/iSeatz/iConnectz.mp4' },
    { title: 'iCookz', url: 'https://assets.corneliuses.com/videos/iSeatz/iCookz.mp4' },
    { title: 'iInnovatorz', url: 'https://assets.corneliuses.com/videos/iSeatz/iInnovatorz.mp4' },
    { title: 'iSeatz Afternoonz', url: 'https://assets.corneliuses.com/videos/iSeatz/iSeatz-afternoonz.mp4' },
    { title: 'iUX Design', url: 'https://assets.corneliuses.com/videos/iSeatz/iUix-design.mp4' },
    { title: 'iWrestler', url: 'https://assets.corneliuses.com/videos/iSeatz/iWrestler.mp4' },
    { title: 'Wedding Video', url: 'https://assets.corneliuses.com/videos/iSeatz/Special-Announcements-11-21-video.mp4' },
    { title: 'iZ Holiday Spirit', url: 'https://assets.corneliuses.com/videos/iSeatz/iZ-Holiday-Spirit.mp4'},
    { title: 'The Night of Release', url: 'https://assets.corneliuses.com/videos/iSeatz/the-night-of-release.mp4' }
];

export const initalVideoSetup = { initialVideoSource: '' };

export const ChildComponent = () => <>
    <h1>Be Amazed!</h1>
    <h3>Fortune Tellers Sometimes Get It Right</h3>
    <p>{loremIpsum}</p>
</>;

export const VideoListComponent = ({clickFunction}) => <div className="storybook-video_list-container">
    {videos.map(video => <div
        className="storybook-video-container"
        key={video.title}
        onClick={() => clickFunction(video.url)}
    >
        <h1>{video.title}</h1>
    </div>)}
</div>;