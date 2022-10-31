import { useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   const handlerFeedback = type => {
     switch (type) {
       case 'good': setGood(state => state + 1)
         break
       case 'neutral': setNeutral(state => state + 1)
         break
        case 'bad': setBad(state => state + 1)
         break
       default:
         break
    }
  };

  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / totalFeedback) * good);
  };
  return (
    <>
        <h1>Feedback page</h1>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handlerFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>)
}



