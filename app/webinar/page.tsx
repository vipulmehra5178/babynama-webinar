'use client';
import WebinarCard from '@/components/WebinarCard';

const webinars = [
  {
    id:1,
    title: 'Raising Healthy Babies 101',
    shortDesc: 'Essential health tips for your baby’s first year.',
    date: 'June 12, 2025',
    speaker: 'Dr. Meera Kapoor',
    thumbnail: '/101.png',
    details: {
      place: 'Google Meet',
      link: 'https://meet.google.com/rhb-baby-health',
      benefits: 'Understand infant development, immunity, and early health strategies.',
      audience: 'New parents, caregivers, expecting couples',
      features: 'Live Q&A, downloadable checklist, expert panel discussion'
    }
  },
  {
    id:2,
    title: 'Feeding Habits for Newborns',
    shortDesc: 'Master the art of healthy feeding schedules.',
    date: 'June 18, 2025',
    speaker: 'Dr. Rishi Malhotra',
    thumbnail: '/102.png',
    details: {
      place: 'Zoom',
      link: 'https://zoom.us/newborn-feeding-101',
      benefits: 'Learn the do’s and don’ts of newborn feeding, milk schedules, and diet tips.',
      audience: 'Mothers with infants, midwives, pediatric nurses',
      features: 'Free feeding guide PDF, case studies, recorded access'
    }
  },
  {
    id:3,
    title: 'Postpartum Tips for Moms',
    shortDesc: 'Navigate the fourth trimester like a pro.',
    date: 'June 25, 2025',
    speaker: 'Dr. Neha Sharma',
    thumbnail: '/103.png',
    details: {
      place: 'Microsoft Teams',
      link: 'https://teams.microsoft.com/postpartum-moms-support',
      benefits: 'Mental and physical wellness tips, managing sleep, and nutrition post-delivery.',
      audience: 'New moms, support groups, counselors',
      features: 'Mom support forum, expert panel, free wellness ebook'
    }
  },{
    id:4,
  title: 'Sleep Training for Infants with Templates',
  shortDesc: 'Tips and techniques to help your baby sleep better.',
  date: 'July 2, 2025',
  speaker: 'Dr. Kavita Narayan',
  thumbnail: '/104.png',
  details: {
    place: 'Zoom',
    link: 'https://zoom.us/infant-sleep-training',
    benefits: 'Understand baby sleep cycles, bedtime routines, and overcoming sleep regression.',
    audience: 'New parents, night nannies, pediatricians',
    features: 'Sleep tracker templates, bedtime stories list, live Q&A'
  }
},
{
  id:5,
  title: 'Vaccination Essentials for Newborns',
  shortDesc: 'All you need to know about infant vaccinations.',
  date: 'July 8, 2025',
  speaker: 'Dr. Anjali Menon',
  thumbnail: '/105.png',
  details: {
    place: 'Google Meet',
    link: 'https://meet.google.com/vaccine-schedule',
    benefits: 'Learn the vaccination timeline, side effects, and prep tips for babies.',
    audience: 'Parents, nurses, healthcare providers',
    features: 'Printable vaccination chart, expert myth-busting session'
  }
},
{
  id:6,
  title: 'Baby’s First Year: Growth & Milestones',
  shortDesc: 'Track & understand your child’s mental milestones.',
  date: 'July 15, 2025',
  speaker: 'Dr. Arjun Iyer',
  thumbnail: '/106.png',
  details: {
    place: 'Microsoft Teams',
    link: 'https://teams.microsoft.com/baby-milestones',
    benefits: 'Identify key milestones, red flags to watch for, and developmental activities.',
    audience: 'Parents, early childhood educators',
    features: 'Milestone tracker PDF, activity planner, expert review'
  }
},
{
  id:7,
  title: 'Mental Wellness for New Parents',
  shortDesc: 'Don’t just take care of the baby — care for yourself too.',
  date: 'July 22, 2025',
  speaker: 'Dr. Simran Dutta',
  thumbnail: '/107.png',
  details: {
    place: 'Google Meet',
    link: 'https://meet.google.com/parent-wellbeing',
    benefits: 'Combat postpartum depression, anxiety, and exhaustion with expert strategies.',
    audience: 'Parents, counselors, therapists',
    features: 'Mindfulness session, parent burnout checklist, expert support'
  }
}
];

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Upcoming Webinars</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {webinars.map((webinar, index) => (
          <WebinarCard key={index} {...webinar} />
        ))}
      </div>
    </main>
  );
}
