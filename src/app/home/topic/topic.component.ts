import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topics:any;
  constructor(private topicService:TopicService) {


  }

  ngOnInit() {
    this.topics = [];
    this.topicService.getTopics().subscribe(topics => {
     console.log(topics);
      this.topics = topics;
    })
  }

}
