import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  images: string[] = [
    'assets/images/Image_Page_2.jpeg',
    'assets/images/Image_Page_4.jpg',
    'assets/images/Image_Page_7.jpg',
  ];

  // current page index
  currentImage: number = 0;

  contents = [
    {
      imageUrl: 'assets/images/2hours.png',
      imageLabel: '2 hours',
      title: '',
      description: [
        'That’s how much time most of us lose every single day to small distractions. Which means,',
        "<b class='light-blue'>2 more hours</b> stuck at work.",
        "<b class='light-blue'>2 less hours</b> with the people you love.",
        "<b class='light-blue'>2 less hours</b> to follow your passion.",
        "<b class='light-blue'>2 less hours</b> just for yourself.",
        '<b>By using Skye every day, you can add these 2 hours back to your life.</b>',
      ],
    },
    {
      imageUrl: 'assets/images/Image_Page_5.png',
      imageLabel: '',
      title: 'what is skye?',
      description: [
        'Skye is a small, tactile timer you can take anywhere. Set it for 5, 15, 30, or 60 minutes, and it gently vibrates at these intervals to keep you aware of the passage of time with no screens, and hence no distractions.',
        'It helps you stay present, get into flow, and focus on what truly matters, whether you’re studying, creating, or living in the moment. Built to be durable and purposeful, Skye is your everyday companion for mindful, distraction-free work.',
      ],
    },
    {
      imageUrl: 'assets/images/Image_Page_8.png',
      imageLabel: 'students',
      title: 'got skye?',
      description: [
        'Have you seen your kids lose focus while studying, spending time drifting from one task to another instead of getting work done?',
        '<b>On average, students lose more than 25 percent of their study time to distractions.</b>',
        'For those preparing for competitive exams, that lost time can be a lost opportunity.',
        'Skye gently nudges them back before they drift too far, helping them stay on track, finish faster, and make every study session count.',
      ],
    },
    {
      imageUrl: 'assets/images/Image_Page_9.png',
      imageLabel: 'working professionals',
      title: 'got skye?',
      description: [
        'Have you ever sat down to get work done, only to be pulled away by emails, messages, or little distractions?',
        '<b>Research shows it actually takes about 23 minutes to get fully back into focus after being distracted.</b>',
        'Skye helps you set focused blocks of time and protect your attention, so you can get real work done, make steady progress on projects, and still have energy left to enjoy your evening.',
      ],
    },
    {
      imageUrl: 'assets/images/Image_Page_10.png',
      imageLabel: 'creatives',
      title: 'got skye?',
      description: [
        'As a creative, whether you make music, write books, paint, or create videos, you know how important focus is and how easily you can lose it.',
        '<b>Studies show creative people lose over 30 percent of their potential work time to interruptions, which can really slow down progress.</b>',
        'Skye quietly keeps you anchored in the process, helping your ideas stay alive, your projects move forward, and the work you imagined actually come to life.',
      ],
    },
    {
      imageUrl: 'assets/images/Image_Page_11.png',
      imageLabel: 'mindfulness enthusiasts',
      title: 'got skye?',
      description: [
        'Skye isn’t here to teach you how to meditate. What it does is help you carry that same clear and present state of mind into the rest of your day.',
        '<b>On average, people spend almost 1/2 of their waking hours with wandering minds.</b>',
        'It is like taking the calm you find on the mat or cushion and keeping it with you, whether you are at work, at home, or just moving through your day.',
      ],
    },
  ];
}
