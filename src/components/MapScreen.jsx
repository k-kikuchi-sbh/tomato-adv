export default function MapScreen({ onSelectArea, onGoToChoice }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>どこを調査する？</h2>
      <button className="button-cute" onClick={() => onSelectArea('畑')}>畑</button>
      <button className="button-cute" onClick={() => onSelectArea('市場')}>市場</button>
      <button className="button-cute" onClick={() => onSelectArea('厨房')}>厨房</button>

      {onGoToChoice && (
        <div style={{ marginTop: '2em' }}>
          <button onClick={onGoToChoice}>🍅 トマトを選ぶ</button>
        </div>
      )}
    </div>
  )
}
