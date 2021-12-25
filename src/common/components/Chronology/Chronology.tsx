import React, { useCallback, useEffect, useRef } from 'react';
import { classnames } from 'common/utils';
import classes from './styles.module.scss';

const outerHeight = (el: HTMLElement) => {
  let height = el.offsetHeight;
  const style = getComputedStyle(el);

  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
};

interface Props {
  elements: Array<React.ReactElement> | undefined;
}

const Chronology: React.FC<Props> = ({ elements, ...restProps }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<HTMLDivElement | null>(null);

  const styleTimeline = useCallback(() => {
    if (!timeline.current || !container.current) return;

    timeline.current.style.position = 'absolute';

    const timelineWidth = timeline.current.offsetWidth;
    const containerWidth = container.current.offsetWidth;
    const timelineLeft = (containerWidth - timelineWidth) / containerWidth / 2;
    timeline.current.style.left = `${timelineLeft * 100}%`;
    timeline.current.style.top = '0';
    timeline.current.style.width = `${timelineWidth}px`;
    timeline.current.style.marginTop = `-${timelineWidth / 2}px`;
  }, [timeline.current, container.current, restProps]);

  const styleEvents = useCallback(() => {
    const events = [...(container?.current?.querySelectorAll<HTMLElement>(`.${classes.event}`) ?? [])];
    const markers = [...(container?.current?.querySelectorAll<HTMLElement>(`.${classes.marker}`) ?? [])];

    const containerWidth = container?.current?.offsetWidth ?? 0;

    // Position events side by side.
    const sides = { a: 0, b: 0 };
    let lastMarkerPos = 0;

    events.forEach((event, i) => {
      event.style.position = 'absolute';

      // Select in which side to put the event.
      const left = sides.a <= sides.b;
      if (left) {
        event.style.left = '0';
        event.style.top = `${sides.a}px`;
        sides.a += outerHeight(event);
        event.className = classnames(event.className, classes.eventLeft);
      } else {
        event.style.right = '0';
        event.style.top = `${sides.b}px`;
        sides.b += outerHeight(event);
        event.className = classnames(event.className, classes.eventRight);
      }
      const marker = markers[i];
      if (marker) {
        const className = left ? classes.markerLeft : classes.markerRight;
        marker.className = classnames(marker.className, className);

        marker.style.position = 'absolute';
        const markerLeft = (containerWidth - marker.offsetWidth) / containerWidth / 2;
        marker.style.left = `${markerLeft * 100}%`;

        let nextMarkerTop = parseInt(event.style.top, 10);
        const markerOuterHeight = outerHeight(marker);
        const willOverlap = i > 0 && nextMarkerTop <= lastMarkerPos + markerOuterHeight;

        if (willOverlap) {
          nextMarkerTop = lastMarkerPos + markerOuterHeight;
        }
        marker.style.top = `${nextMarkerTop}px`;
        lastMarkerPos = nextMarkerTop;
      }
      if (timeline.current) timeline.current.style.height = `${Math.max(sides.a, sides.b)}px`;
    });
  }, [timeline.current, container.current, restProps]);

  const redraw = useCallback(() => {
    if (container.current) container.current.style.position = 'relative';
    styleTimeline();
    styleEvents();
  }, [container, styleTimeline, styleEvents]);

  useEffect(() => {
    redraw();
    window.addEventListener('resize', redraw);
    return () => window.removeEventListener('resize', redraw);
  }, [redraw]);

  return (
    <div ref={container} {...restProps}>
      <div ref={timeline} className={classes.timeline} />
      {elements?.map((element, index) => (
        <React.Fragment key={index}>
          <div className={classes.marker} />
          <div className={classes.event}>{element}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Chronology;
