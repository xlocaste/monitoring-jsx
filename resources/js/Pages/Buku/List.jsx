import React from 'react'
import { Link, router } from '@inertiajs/react'

export default function Index({ buku }) {
  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus buku ini?')) {
      router.delete(`/buku/${id}`)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
      <Link href="/buku/create" className="bg-blue-600 text-white px-4 py-2 rounded">+ Tambah Buku</Link>

      <table className="w-full mt-4 border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Judul</th>
            <th className="p-2 border">Deskripsi</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item, index) => (
            <tr key={item.id} className="text-sm">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{item.judul}</td>
              <td className="p-2 border">{item.deskripsi}</td>
              <td className="p-2 border">
                <Link href={`/buku/${item.id}/edit`} className="text-blue-600">Edit</Link> |{' '}
                <button onClick={() => handleDelete(item.id)} className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
