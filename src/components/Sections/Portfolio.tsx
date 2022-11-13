// import {ExternalLinkIcon} from '@heroicons/react/outline';
// import classNames from 'classnames';
// import Image from 'next/image';
import {FC, memo} from 'react';

// import {isMobile} from '../../config';
import {SectionId} from '../../data/data';
// import {PortfolioItem} from '../../data/dataDef';
// import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;