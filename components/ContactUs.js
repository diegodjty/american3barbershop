import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div
      className="bg-black text-white font-bebas flex justify-center "
      id="contact"
    >
      <div className="flex flex-col items-center max-w-md">
        <p className="text-5xl my-6">CONTACT US</p>
        <div className="text-center mb-6 text-xl">
          <div>
            <span>email: </span>
            <Link href={'mailto:american3barbershop@gmail.com'}>
              american3barbershop@gmail.com
            </Link>
          </div>
          <div>
            <div>
              <span>phone number: </span>
              <Link href={'tel:6312132088'}>+1 631-213-2088 </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[50%] mb-6">
          <div>
            <Link href={'tel:6312132088'} passHref>
              <Image
                src={'/img/whitePhone.svg'}
                height={30}
                width={30}
                alt={'phone number'}
              />
            </Link>
          </div>
          <div>
            <Link
              href={
                'https://instagram.com/american3barbershop?igshid=YmMyMTA2M2Y='
              }
              passHref
            >
              <a target="_blank">
                <Image
                  src={'/img/iglogo.svg'}
                  height={30}
                  width={30}
                  alt={'phone number'}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href={'https://www.tiktok.com/@american3barbershop'} passHref>
              <a target="_blank">
                <Image
                  src={'/img/tiktoklogo.svg'}
                  height={30}
                  width={30}
                  alt={'phone number'}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={
                'https://www.facebook.com/American-lll-Barbershop-112927491418940'
              }
              passHref
            >
              <a target="_blank">
                <Image
                  src={'/img/fblogo.svg'}
                  height={30}
                  width={30}
                  alt={'phone number'}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <span>copyright &copy; {new Date().getFullYear()} |</span>
          <span>
            <Link href={'https://www.diegotaveras.com/'}>
              powered by: diegotaveras.com
            </Link>{' '}
            |
          </span>
          <span>all rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
