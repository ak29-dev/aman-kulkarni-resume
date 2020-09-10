import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const EducationDetail = ({ 
  name, 
  years, 
  instituteName 
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <span>
          <Text m={3} color="text">
            {instituteName}
          </Text>
        </span>
        <Box>
          <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
            {years}
          </ImageSubtitle>
        </Box>
      </TextContainer>
    </Flex>
  </Card>
);

EducationDetail.propTypes = {
  name: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  instituteName: PropTypes.string.isRequired,
};

const Education = () => (
  <Section.Container id="education" Background={Background}>
    <Section.Header name="Education" icon="✍️" label="Education" />
    <StaticQuery
      query={graphql`
        query EducationQuery {
          contentfulAbout {
            education {
              id
              name
              years
              instituteName
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.education.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <EducationDetail {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Education;
