import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topics:any;
  constructor() {

  }

  ngOnInit() {
    this.topics = [{title:"Title",image:'http://via.placeholder.com/350x150','content':"Content"},
      {title:"Title2",image:'http://via.placeholder.com/350x150','content':"Content2"},
      {title:"Title3",image:'http://via.placeholder.com/350x150','content':"Content"},{title:"Title",image:'http://via.placeholder.com/350x150','content':"Content"},
      {title:"Title2",image:'http://via.placeholder.com/350x150','content':"Content2"},
      {title:"Title3",image:'http://via.placeholder.com/350x150','content':"Content"}]
  }

}
