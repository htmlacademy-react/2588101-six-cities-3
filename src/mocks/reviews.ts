import {Review} from '../types/review';

export const mockReviews: Review[] = [
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-06-08T14:13:56.569Z',
    'user': {
      'name': 'Zac',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      'isPro': false
    },
    'comment': 'Great place.',
    'rating': 3
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2020-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Dark',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      'isPro': true
    },
    'comment': 'Interesting.',
    'rating': 5
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-05-07T14:13:56.569Z',
    'user': {
      'name': 'Jean',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  }
];
