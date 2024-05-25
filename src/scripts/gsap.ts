import SplitType from 'split-type';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-text')

splitTypes.forEach((char, i) => {
    const text = new SplitType(char as HTMLElement, { types: 'chars' });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 10%',
            scrub: true,
        },
        opacity: .2,
        stagger: .1,
    })
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 50%',
        end: '100% 50%',
        scrub: 1,
    }
})

tl.to('.line-timeline', {
    height: '90%'
})

type TimelineParams = {
    trigger: string,
    start: string,
    end: string,
    target: string,
    properties: Record<string, any>
};

function createTimeline({ trigger, start, end, target, properties }: TimelineParams) {
    return gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: 1
        }
    }).to(target, properties);
}

const tl_t = createTimeline({
    trigger: '.timeline',
    start: '-20% 50%',
    end: 'bottom 50%',
    target: '.timeline-text-k',
    properties: { opacity: 1 }
});

const tl_ur = createTimeline({
    trigger: '.timeline',
    start: '40% 50%',
    end: 'bottom 50%',
    target: '.timeline-text-ur',
    properties: { opacity: 1 }
});

const tl_phd = createTimeline({
    trigger: '.timeline',
    start: '60% 50%',
    end: 'bottom 50%',
    target: '.timeline-text-phd',
    properties: { opacity: 1 }
});

const tl_efinex = createTimeline({
    trigger: '.projects-section',
    start: 'top 50%',
    end: '50% 50%',
    target: '.efinex',
    properties: { 'margin-top': '0px', opacity: 1 }
})

const tl_f1_dash = createTimeline({
    trigger: '.projects-section',
    start: 'top 50%',
    end: '50% 50%',
    target: '.f1-dash',
    properties: { 'margin-top': '20px', opacity: 1 }
})