import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion-primitives/accordion';
import { ChevronUp } from 'lucide-react';
import { WORK_EXPERIENCE } from '../app/data';

export function AccordionIcons() {
  return (
    
    <Accordion
      className='flex w-full flex-col'
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
    {WORK_EXPERIENCE.map((job, index) => (

      <AccordionItem key={job.id} value={job.id} className={`relative h-full w-full rounded-[30px] bg-white p-4 dark:bg-zinc-950 py-2 ${index < WORK_EXPERIENCE.length ? 'border-2  mb-2 border-zinc-200 dark:border-zinc-700' : ''}`}>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50 group-data-[expanded=true]:bg-zinc-100 dark:group-data-[expanded=true]:bg-zinc-800/50 rounded-lg px-3 py-2'>
          <div className='flex items-center justify-between'>
            <div className="relative flex w-full flex-row justify-between">
              <div>
                <h4 className="font-normal dark:text-zinc-100">
                  {job.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {job.start} - {job.end}
              </p>
            </div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {job.content.map((line, index) => (
            <p key={index} className='text-zinc-500 dark:text-zinc-400 mb-2'>
              {line}
            </p>
          ))}
        </AccordionContent>
      
        </AccordionItem>
          ))}
      
    </Accordion>
  );
}