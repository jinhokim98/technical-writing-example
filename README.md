# 문서 주제

- UX를 향상시키는 서버 상태 관리 (react query v5)

# 대상 독자

사용자 경험을 올리는 서버 상태 관리를 하고 싶은 프론트엔드 개발자,
react query의 기본 사용법 및 캐시의 유효성에 대해 알고 있어야 한다.

# 문서 활용 계획

우아한 기술블로그에 공유 / 행동대장 팀 내 기술공유

# 목차와 간단한 내용

```markdown
# 서버 상태 관리의 필요성

# 서버 상태 변화에 따른 캐시 데이터 관리

mutate 호출에 따라 서버 상태가 변동된다면, 해당되는 캐시 데이터를 바꿔주어야한다.

## 캐시 무효화 전략

### queryClient.invalidateQueries

invalidate queries의 특징: invalidate queries는 마운트 상태일 때 refetch가 일어나기 때문에 mutate 후 언마운트가 되면 refetch가 일어나지 않게 된다.
그래서 다시 마운트 됐을 때 잠시 전 데이터가 유지되고 refetch가 일어나 깜빡이는 현상이 나타나게 된다.

## 캐시 리패치

위의 깜빡임 현상을 해결할 수 있는 방법 reset, refetch를 활용한 다른 방식을 소개한다.
위의 방식과 다른 점을 보여준다.

## 낙관적 업데이트를 이용한 서버 상태 변화 관리

setQueryData, cancelQueries

# 서버 상태를 미리 불러오기

서버 상태를 미리 불러옴으로써 사용자에게 로딩 화면을 보여주지 않고도 바로 데이터를 보여주게 할 수 있다.

## queryClient.prefetchQueries

## 어디에 사용하면 좋을까?

# 결론
```
