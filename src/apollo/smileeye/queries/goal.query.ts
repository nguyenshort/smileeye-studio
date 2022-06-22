import gql from 'graphql-tag'

// goal_root_by_user
export const GOAL_ROOT_BY_USER = gql`
  query GoalRootByUser($userId: ID!) {
    goal_root_by_user(user_id: $userId) {
      id
      name
      description
      image
    }
  }
`

export const GOAL_TREE = gql`
  query GetGoalTree($goalId: ID) {
    my_tree_goal_v2(goal_id: $goalId)
  }
`

export const GET_POST_BOTH = gql`
  query ListPostsAndDiary($userId: ID, $goalRootId: ID) {
    list_posts_and_diary(user_id: $userId, goal_root_id: $goalRootId) {
      ... on JapanesePost {
        id
        title
        more
        type
        created_at
      }
      ... on StoryShare {
        id
        content
        created_at
        goal {
          id
          name
        }
      }
    }
  }
`

export const LIST_GOAL_ROOT = gql`
  query List_goal_root {
    list_goal_root {
      id
      name
      user_id
      user {
        id
        name
      }
      sellRequest {
        id
      }
      description
      goal_score {
        id
      }
      total_score
      price
      status
      video
      image
      type
      report_type
      owner_percent
      detailed_income
      trial_blocks
      is_trial
      start_day
      created_at
    }
  }
`