import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion-page',
  templateUrl: './promotion-page.component.html',
  styleUrls: ['./promotion-page.component.css']
})
export class PromotionPageComponent {
  rows = [
    {
      textRight: true,
      icon: "grade",
      title: "Successor to Vkbln4ll",
      text: "As the successor to Vkbln4ll v2 Discord, Vocabulum has an all-new intelligent system and a lot of new features."
    },
    {
      textRight: false,
      icon: "edit",
      title: "Adaptive trainer for your Cursus vocabularies",
      text: "Practice vocabularies in the same format and portions you already know from your textbook. Customize your session and use different modes and difficulty levels to make Vocabulum work for you."
    },
    {
      textRight: true,
      icon: "search",
      title: "Search",
      text: "Find unkown vocabularies in seconds! Search by Latin or German meaning, and by base form or any declined or conjugated form."
    },
    {
      textRight: false,
      icon: "article",
      title: "Generate & identify",
      text: "Let Vocabulum generate any form of any word for you, like declined nouns or adjectives or conjugated verbs, special forms like adverbs or participles or even forms of irregular words like pronouns."
    },
    {
      textRight: true,
      icon: "grid_on",
      title: "Practice forms",
      text: "Get better at making or recognizing forms! With Vocabulum, you can learn form-making in general or the forms of specific words like pronouns that you have to learn."
    },
    {
      textRight: false,
      icon: "computer",
      title: "Translation assistance",
      text: "If you need help translating a text, you can also give entire sentences to Vocabulum. It will provide you with all the information you need, from what form the words are to what they mean in German."
    }
  ];
}
