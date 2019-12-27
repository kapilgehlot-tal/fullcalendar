import { htmlEscape, FgEventRenderer, Seg } from "fullcalendar-custom/core";
import ListView from "./ListView";

export default class ListEventRenderer extends FgEventRenderer {
  listView: ListView;

  constructor(listView: ListView) {
    super();

    this.listView = listView;
  }

  attachSegs(segs: Seg[]) {
    // if (!segs.length) {
    //   this.listView.renderEmptyMessage();
    // } else {
    //   this.listView.renderSegList(segs);
    // }

    //Render for an empty event too

    this.listView.renderSegList(segs);
  }

  detachSegs() {}

  // generates the HTML for a single event row
  renderSegHtml(seg: Seg) {
    let { theme } = this.context;
    let eventRange = seg.eventRange;
    let eventDef = eventRange.def;
    //let eventInstance = eventRange.instance;
    let eventUi = eventRange.ui;
    let url = eventDef.url;
    let classes = ["fc-list-item"].concat(eventUi.classNames);
    //let bgColor = eventUi.backgroundColor;
    //let timeHtml;

    // if (eventDef.allDay) {
    //   timeHtml = getAllDayHtml(options);
    // } else if (isMultiDayRange(eventRange.range)) {
    //   if (seg.isStart) {
    //     timeHtml = htmlEscape(
    //       this._getTimeText(
    //         eventInstance.range.start,
    //         seg.end,
    //         false // allDay
    //       )
    //     );
    //   } else if (seg.isEnd) {
    //     timeHtml = htmlEscape(
    //       this._getTimeText(
    //         seg.start,
    //         eventInstance.range.end,
    //         false // allDay
    //       )
    //     );
    //   } else {
    //     // inner segment that lasts the whole day
    //     timeHtml = getAllDayHtml(options);
    //   }
    // } else {
    //   // Display the normal time text for the *event's* times
    //   timeHtml = htmlEscape(this.getTimeText(eventRange));
    // }

    if (url) {
      classes.push("fc-has-url");
    }

    return (
      '<tr class="' +
      classes.join(" ") +
      '">' +
      '<td colspan="3" class="fc-list-item-title ' +
      theme.getClass("widgetContent") +
      '">' +
      "<a" +
      (url ? ' href="' + htmlEscape(url) + '"' : "") +
      ">" +
      (eventDef.title || "") +
      "</a>" +
      "</td>" +
      "</tr>"
    );
  }

  // like "4:00am"
  computeEventTimeFormat() {
    return {
      hour: "numeric",
      minute: "2-digit",
      meridiem: "short"
    };
  }
}
