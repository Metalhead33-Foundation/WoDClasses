import { createElementAccess } from "typescript";
import { RpgCharacterStore } from "./rpgcharacter";
import { RpgPost, convertDate } from "./rpgpost";
import { RpgSession } from "./rpgsection";

export function renderPost(document : Document, post: RpgPost, characters: RpgCharacterStore) : HTMLDivElement {
    var rootNode = document.createElement('div');
    const chr = characters.has(post.user) ? characters.get(post.user) : null;
    rootNode.setAttribute('class', 'post');
    // Time
    var time = document.createElement('div');
    time.setAttribute('class', 'time');
    time.innerHTML = (post.streamlinedDate) ? convertDate(post).toLocaleString("en-US") : post.date;
    rootNode.append(time,'\n');
    // Content
    var contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content');
    contentContainer.append('\n');
    // Content -> Character
    var character = document.createElement('div');
    character.setAttribute('class', 'character');
    character.append('\n');
    // Content -> Character -> Name
    var name = document.createElement('div');
    name.setAttribute('class', 'name');
    name.innerHTML = (chr != null) ? chr.character_name : 'Unknown';
    character.append(name,'\n');
    // Content -> Character -> Avatar
    var avatar = document.createElement('div');
    avatar.setAttribute('class', 'avatar');
    avatar.innerHTML = (chr != null) ? chr.characterpic : 'Unknown-person.gif';
    character.append(avatar,'\n');
    // Content -> Character
    contentContainer.append(character,'\n');
    // Content -> Speech
    var speech = document.createElement('div');
    speech.setAttribute('class', 'speech');
    speech.innerHTML = post.content;
    contentContainer.append(speech);
    contentContainer.append('\n');
    rootNode.append(contentContainer,'\n');
    return rootNode;
}
export function renderPosts(document : Document, sections: RpgSession, characters: RpgCharacterStore) : HTMLDivElement {
    var rootNode = document.createElement('div');
    sections.forEach( (section) => {
        var sectionHeader = document.createElement('h1');
        sectionHeader.innerHTML = section.sectionName;
        rootNode.append(sectionHeader,'\n');
        section.posts.forEach( (post) => {
            rootNode.append(renderPost(document,post,characters),'\n');
        });
    });
    return rootNode;
}
export function renderPostsTo(rootNode : HTMLElement, document : Document, sections: RpgSession, characters: RpgCharacterStore) : void {
    sections.forEach( (section) => {
        var sectionHeader = document.createElement('h1');
        sectionHeader.innerHTML = section.sectionName;
        rootNode.append(sectionHeader,'\n');
        section.posts.forEach( (post) => {
            rootNode.append(renderPost(document,post,characters),'\n');
        });
    });
}