import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'image-async',
  templateUrl: './image-async.component.html',
  styleUrls: ['./image-async.component.scss']
})
export class ImageAsyncComponent implements OnInit {

  loader: any;
  @Input()
  src: string = "";

  @Input()
  clazz: string = "";
  clazzInput: string = "";

  @Input()
  imageContent: string;
  @Output("handleImageData")
  imageContentEmitter: EventEmitter<string> = new EventEmitter();

  @Output("loadImageData")
  handler: EventEmitter<any> = new EventEmitter();

  @Input()
  tempImageData: string = "/assets/images/favicon.ico";
  private subscriptions: any[] = [];
  retry: any;

  constructor() {

  }
  ngOnInit() {

    if (this.imageContent) {
      this.tempImageData = this.imageContent;
      this.clazzInput = this.clazz;
      return;
    }
    setTimeout(()=>this.handler.emit(this.dataHandler))
  }

  dataHandler = (data: any) => {
    if (data) {
      this.imageContent = "data:image/png;base64," + data.trim();
      this.tempImageData = this.imageContent;
      this.clazzInput = this.clazz;
      this.imageContentEmitter.emit(this.tempImageData);
    } else if (!this.retry) {
      this.retry = setTimeout(() => this.handler.emit(this.dataHandler),6000);
    }

  }

  ngOnDestroy() {
    if (this.loader) {
      clearTimeout(this.loader);
    }
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }

    this.src = undefined;
    this.tempImageData = "";
    this.subscriptions = [];
  }
}
