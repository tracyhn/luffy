import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { 
  GiDogHouse,
  GiDogBowl,
} from 'react-icons/gi';
import {FaShoePrints} from 'react-icons/fa';
import{RiMedicineBottleFill} from 'react-icons/ri';
import{BiTennisBall} from 'react-icons/bi';
import {TbCameraHeart} from 'react-icons/tb';
import img1 from '../../images/Luffy__2017_2.jpg';
import img2 from '../../images/Luffy__1992_BW.jpg';
import theo from '../../images/theo.PNG';
import ella from '../../images/ella.PNG';
import mega from '../../images/mega.PNG';
import simba from '../../images/simba.jpeg';
import kona from '../../images/kona.PNG';
import buddy from '../../images/buddy.png';
import haven from '../../images/haven.PNG';

const navigation = [
  { name: 'Home', href: '#', scrollFunction: scrollToHome},
  { name: 'Services', href: '#', scrollFunction: scrollToServices},
  { name: 'About', href: '#', scrollFunction: scrollToAbout},
  { name: 'Reviews', href: '#', scrollFunction: scrollToReviews},
  { name: 'FAQ', href: '#', scrollFunction: scrollToFaq},
]

const services = [
  {
    body: 'Potty breaks every 2-3 hours.',
    icon: GiDogHouse,
  },
  {
    body: 'Daily walks (weather permitting).',
    icon: FaShoePrints,
  },
  {
    body: 'Consistent feeding schedule.',
    icon: GiDogBowl,
  },
  {
    body: 'Oral administration of medication (if instructed).',
    icon: RiMedicineBottleFill,
  },
  {
    body: 'Daily updates (with photos and videos).',
    icon: TbCameraHeart,
  },
  {
    body: 'Mental and physical enrichment.',
    icon: BiTennisBall,
  },
]

const testimonials = [
  {
    body: "I've trusted Tracy with my dog multiple times. My dog loves his time with her. She is the best dog sitter and would recommend her to any one!",
    author: {
      name: 'Tiffany L.',
      handle: 'Theo',
      imageUrl: theo,
    },
  },
  {
    body: '[Khoa] and Tracy were fantastic and were very attentive to Ella. We will now always use them to watch Ella when we go on vacation. I highly recommend!!',
    author: {
      name: 'Thomas C.',
      handle: 'Ella',
      imageUrl: ella,
    },
  },
  {
    body: 'Fantastic sitters- I am a repeat client. They are attentive and have great communication. Their dogs are sweet mannered with my dog and I know they give them great care',
    author: {
      name: 'Brittany O.',
      handle: 'Haven',
      imageUrl: haven,
    },
  },
  {
    body: 'Wonderful people with great understanding and compassion.',
    author: {
      name: 'Mayil S.',
      handle: 'Buddy',
      imageUrl: buddy,
    },
  },
  {
    body: 'Khoa and Tracy are awesome. Simba enjoyed playing with them and their puppies especially Luffy. We left Simba for a month and they were sending pictures and videos everyday.',
    author: {
      name: 'Surekha R.',
      handle: 'Simba',
      imageUrl: simba,
    },
  },
  {
    body: 'Great and sweet hosts, our furry boy love them, happy and excited to see them again and again.',
    author: {
      name: 'Iris H.',
      handle: 'Mega',
      imageUrl: mega,
    },
  },
  // More testimonials...
]

const faqs = [
  {
    question: "Do you have a breed restrictions for dogs?",
    answer: "No, we do not have any breed restrictions for dogs.",
  },
  {
    question: "What are the requirements for bringing my dog?",
    answer: <div><p>To ensure a safe and enjoyable environment for everyone, we require the following:</p>
    <ul>
    <br></br>
    <li>All dogs must be friendly in nature.</li>
    <li>Dogs must weigh under 40 pounds.</li>
    <li>Dogs must be up-to-date on their vaccinations.</li>
    <li>Dogs must be on their monthly flea and tick preventions.</li>
    </ul>
    </div>
  },
  {
    question: "How many dogs do you accomodate for boarding at a time?",
    answer: "To ensure a comfortable experience for both the dogs and us, we limit the number of dogs to two at a time.",
  },
  {
    question: "Will my dog potentially share accomodations with another dog if I'm boarding only one dog?",
    answer: "Yes, if you are boarding a single dog, there is a possibility that your dog may be cohosted with another.",
  },
  {
    question: "What happens if my dog requires medical attention while in your care?",
    answer: "If your dog requires medical attention, we will promptly take them to the veterinarian listed on file. Additionally, we will notify you immediately to keep you informed about your dog's well-being. Your dog's health and safety are our top priorities.",
  },
  {
    question: "If my dog needs to visit the vet, who is responsible for the veterinary charges?",
    answer: "For information regarding financial responsibility for veterinary charges in such situations, please refer to our Terms of Service and Agreement.",
  },
  // More questions...
]
const footerNavigation = [
    { name: 'Terms of Service and Agreement', href: '#' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function scrollToHome(event) {
  event.preventDefault();  // prevent the default link click action

  const target = document.getElementById("home-page");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToServices(event) {
  event.preventDefault();  // prevent the default link click action

  const target = document.getElementById("services-start");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToAbout(event) {
  event.preventDefault();  // prevent the default link click action

  const target = document.getElementById("about-start");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToReviews(event) {
  event.preventDefault();  // prevent the default link click action

  const target = document.getElementById("review-start");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToFaq(event) {
  event.preventDefault();  // prevent the default link click action

  const target = document.getElementById("faq-start");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white sticky">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src=""
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link onClick={item.scrollFunction} key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-black">
                {item.name}
              </Link>
            ))}
            <Link to='/booking' className="text-sm font-semibold leading-6 text-black"> 
              Book
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Landing Section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20" id="home-page">
          <img
            src={img1}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mr-auto max-w-7xl px-6 lg:px-8">
            <div className="mr-auto max-w-2xl py-32 sm:py-48 lg:py-100" id="title">
              <p className="title"> Luffy & Friends
              </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-24 sm:py-32" id="services-start">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight services-fontstyle">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What to expect during your pup's stay with us:
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {services.map((services) => (
              <div key={services.body} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-service p-8 text-sm leading-6">
                  <div className="flex items-center justify-center pb-2">
                  <services.icon size={30} color="white"/>
                  </div>
                  <div>
                    <blockquote className="robotofont text-white font-semibold">
                      <p>{`${services.body}`}</p>
                    </blockquote>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        {/* About Me Section */}
        <div id="about-start"></div>
        <div className="relative z-10 mt-32 bg-about pb-0 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12" id="intro">
                <h1 className='subtitle'>
                  Welcome to Luffy & Friends!
                </h1>
                <blockquote className="about-fontstyle">
                  <p>
                    I'm Tracy, your devoted host, welcoming fellow animal enthusiasts to our cozy abode.
                    Since childhood, a genuine love for animals has defined me. In 2015, I met Luffy, my faithful companion at the Austin Pets Alive! animal shelter.
                    His impact deepened my understanding of pet connections, driving my commitment to provide a secure haven for your furry family. 
                    At Luffy & Friends, pets are cherished like our own. Their well-being is paramount in an environment mirroring the comfort of home.
                    Trust us with your furry companions, as we extend your care and love.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="review-start">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight review-fontstyle">Reviews</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What do our clients think of us?
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold reviewfont">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

        {/* FAQ section */}
        {/*<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">*/}
        <div id="faq-start">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600 text-left">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 bg-footer sm:mt-56" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-10">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-7"
              src=""
              alt=""
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid">
                  {footerNavigation.map((item) => (
                    <a href={item.href} className="text-sm text-white hover:text-white">
                      {item.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
