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
      imageUrl: 'assets/images/students.png',
      imageLabel: 'students',
      title: 'got skye?',
      description: [
        'Have you seen your kids lose focus while studying...',
        '<b>On average, students lose more than 25 percent of their study time to distractions.</b>',
        'Skye gently nudges them back before they drift too far...',
      ],
    },
    {
      imageUrl: 'assets/images/professionals.png',
      imageLabel: 'working professionals',
      title: 'got skye?',
      description: [
        'Have you ever sat down to get work done...',
        '<b>Research shows it actually takes about 23 minutes to get fully back into focus after being distracted.</b>',
        'Skye helps you set focused blocks of time and protect your attention...',
      ],
    },
    {
      imageUrl: 'assets/images/mindfulness.png',
      imageLabel: 'mindfulness enthusiasts',
      title: 'got skye?',
      description: [
        'Skye isn’t here to teach you how to meditate...',
        '<b>On average, people spend almost 1/2 of their waking hours with wandering minds.</b>',
        'It is like taking the calm you find on the mat or cushion and keeping it with you...',
      ],
    },
  ];
}
