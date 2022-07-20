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
      title: "Nachfolger von Vkbln4ll",
      text: "Als Nachfolger von Vkbln4ll v2 Discord hat Vocabulum ein brandneues intelligentes System und viele neue Features."
    },
    {
      textRight: false,
      icon: "edit",
      title: "Personalisierter Trainer für deine Lateinvokabeln",
      text: "Übe Vokabeln in demselben Format und in denselben Lektionen, die du von deinem Lateinbuch kennst. Personalisiere deine Abfrage und verwende verschiedene Modi und Schwierigkeitsgrade, damit Vocabulum für dich funktioniert."
    },
    {
      textRight: true,
      icon: "search",
      title: "Suche",
      text: "Finde unbekannte Vokabeln in wenigen Sekunden! Suche nach der lateinischen oder deutschen Bedeutung, nach der Grundform oder irgendeiner deklinierten oder konjugierten Form."
    },
    {
      textRight: false,
      icon: "article",
      title: "Formen bilden & bestimmen",
      text: "Vocabulum bildet dir jede Form von jedem Wort, also deklinierte Substantive/Adjektive, konjugierte Verben, spezielle Formen wie Adverbien oder Partizipien oder sogar Formen von unregelmäßigen Wörtern wie Pronomen."
    },
    {
      textRight: true,
      icon: "grid_on",
      title: "Formen üben",
      text: "Werde besser im Formen bilden und bestimmen! Mit Vocabulum kannst du allgemein das Bilden von Formen üben oder die speziellen Formen von unregelmäßigen Wörtern wie Pronomen lernen."
    },
    {
      textRight: false,
      icon: "computer",
      title: "Translation Assistance",
      text: "Wenn du Hilfe beim Übersetzen eines lateinischen Textes brauchst, kannst du auch ganze Sätze eingeben. Vocabulum stellt dir dann alle relevanten Informationen bereit, von der Form, in der das Wort auftaucht, bis zu den möglichen deutschen Bedeutungen."
    }
  ];

  openSurvey() {
    window.open("https://forms.gle/VJ9CrCnCa5x8aVu78", "_blank");
  }
}
