import twitch from 'simple-twitch-info';

export default async function getTwitchInfo(names) {
    names = names.split(',');
    result = [];

    for (let name of names) {
        const response = await twitch.getStream(name);
        console.log(response);
        if (response) {
            await result.push(1);
        }
        else {
            await result.push(0);
        }
    }
    return result.join('');
}
